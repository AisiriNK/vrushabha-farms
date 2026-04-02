import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { initiatePayment } from "@/utils/razorpay";
import { toast } from "sonner";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    initiatePayment({
      amount: totalPrice,
      productName: items.map((i) => i.name).join(", "),
      onSuccess: () => {
        toast.success("Payment Successful! 🎉 Your order has been placed.");
        clearCart();
        setIsCartOpen(false);
      },
      onFailure: () => {
        toast.error("Payment was cancelled.");
      },
    });
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-warm-lg animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl font-semibold text-foreground">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                  <div className="flex-1">
                    <h4 className="font-display text-sm font-semibold text-foreground">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.weight}</p>
                    <p className="text-sm font-semibold text-primary mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors">
                        <Plus size={14} />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-destructive hover:text-destructive/80 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="font-body text-muted-foreground">Total</span>
              <span className="font-display text-2xl font-bold text-foreground">₹{totalPrice.toLocaleString()}</span>
            </div>
            <button onClick={handleCheckout} className="w-full py-3 bg-gradient-olive text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
