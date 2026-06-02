declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  amount: number;
  productName: string;
  onSuccess: (response: any) => void;
  onFailure?: (error: any) => void;
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiatePayment = async ({ amount, productName, onSuccess, onFailure }: RazorpayOptions) => {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    alert("Failed to load payment gateway. Please try again.");
    return;
  }

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag",
    amount: amount * 100, // Amount in paise
    currency: "INR",
    name: "Vrushabha Farms",
    description: productName,
    image: "",
    handler: (response: any) => {
      onSuccess(response);
    },
    prefill: {
      name: "Customer",
      email: "customer@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#5a7a2e",
    },
    modal: {
      ondismiss: () => {
        onFailure?.({ reason: "Payment cancelled" });
      },
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
