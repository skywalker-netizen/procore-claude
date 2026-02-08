import { useState, useEffect } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/19065622/ulrzdge/";

export const COMPANY_SIZE_OPTIONS = [
  { label: "Up to 10", value: "Micro" },
  { label: "11 to 20", value: "Small Business" },
  { label: "21 to 100", value: "SMB" },
  { label: "101 to 500", value: "Mid-Market" },
  { label: "500+", value: "Majors" },
] as const;

export const SAFETY_MANAGEMENT_OPTIONS = ["Paper", "Software", "Mix"] as const;

export type CompanySizeValue = typeof COMPANY_SIZE_OPTIONS[number]["value"];
export type SafetyManagementValue = typeof SAFETY_MANAGEMENT_OPTIONS[number];

export const demoFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name is too long"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company name is too long"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
});

export interface QualificationData {
  companySize: CompanySizeValue | "";
  safetyManagement: SafetyManagementValue | "";
}

export interface DemoFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  utm_source: string;
  utm_campaign: string;
  utm_medium: string;
  utm_term: string;
  gclid: string;
  li_fat_id: string;
  gbraid: string;
  fbclkid: string;
  msclid: string;
}

export type FormErrors = Partial<Record<keyof Pick<DemoFormData, 'firstName' | 'lastName' | 'company' | 'email' | 'phone'>, string>>;

export type QualificationErrors = Partial<Record<keyof QualificationData, string>>;

export type FormStep = "qualification" | "contact" | "submitted";

export function useDemoForm() {
  const { toast } = useToast();
  const [step, setStep] = useState<FormStep>("qualification");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [qualificationErrors, setQualificationErrors] = useState<QualificationErrors>({});
  const [qualificationData, setQualificationData] = useState<QualificationData>({
    companySize: "",
    safetyManagement: "",
  });
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_term: "",
    gclid: "",
    li_fat_id: "",
    gbraid: "",
    fbclkid: "",
    msclid: "",
  });

  // Capture UTM parameters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      li_fat_id: params.get("li_fat_id") || "",
      gbraid: params.get("gbraid") || "",
      fbclkid: params.get("fbclkid") || "",
      msclid: params.get("msclid") || "",
    }));
  }, []);

  const handleQualificationSelect = (field: keyof QualificationData, value: string) => {
    setQualificationData((prev) => ({ ...prev, [field]: value }));
    if (qualificationErrors[field]) {
      setQualificationErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleNextStep = () => {
    const newErrors: QualificationErrors = {};
    if (!qualificationData.companySize) {
      newErrors.companySize = "Please select your company size";
    }
    if (!qualificationData.safetyManagement) {
      newErrors.safetyManagement = "Please select how you manage safety";
    }
    if (Object.keys(newErrors).length > 0) {
      setQualificationErrors(newErrors);
      return;
    }
    setStep("contact");
  };

  const handleBackStep = () => {
    setStep("qualification");
  };

  const clearFieldError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearFieldError(name as keyof FormErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = demoFormSchema.safeParse({
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          Company: formData.company,
          "Work email": formData.email,
          "Phone number": formData.phone,
          "Company Size": qualificationData.companySize,
          "Safety Management": qualificationData.safetyManagement,
          utm_source: formData.utm_source,
          utm_campaign: formData.utm_campaign,
          utm_medium: formData.utm_medium,
          utm_term: formData.utm_term,
          gclid: formData.gclid,
          li_fat_id: formData.li_fat_id,
          gbraid: formData.gbraid,
          fbclkid: formData.fbclkid,
          msclid: formData.msclid,
        }),
      });

      setIsSubmitted(true);
      setStep("submitted");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    qualificationData,
    handleInputChange,
    handleQualificationSelect,
    handleNextStep,
    handleBackStep,
    handleSubmit,
    isLoading,
    isSubmitted,
    step,
    errors,
    qualificationErrors,
  };
}
