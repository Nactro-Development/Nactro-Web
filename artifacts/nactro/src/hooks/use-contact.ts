import { useMutation } from "@tanstack/react-query";

interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate network request for contact form submission
      return new Promise<{ success: boolean; message: string }>((resolve) => 
        setTimeout(() => resolve({ success: true, message: "Message sent successfully" }), 1200)
      );
    },
  });
}
