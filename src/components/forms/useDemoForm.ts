import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/19065622/ulrzdge/";

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
}

export function useDemoForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  });

  // Capture UTM parameters on mount - use fixed values except utm_term from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: "adwords",
      utm_campaign: "procore",
      utm_medium: "ppc",
      utm_term: params.get("utm_term") || "",
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
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
          utm_source: formData.utm_source,
          utm_campaign: formData.utm_campaign,
          utm_medium: formData.utm_medium,
          utm_term: formData.utm_term,
        }),
      });

      setIsSubmitted(true);
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
    handleInputChange,
    handleSubmit,
    isLoading,
    isSubmitted,
  };
}
