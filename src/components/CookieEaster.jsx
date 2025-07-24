export default function CookieEaster() {
  return (
    <div
      className="absolute bottom-2 left-2 cursor-pointer"
      onClick={() => {
        alert("🏆 Toodles te está observando.\nThese aren't the cookies you're clicking for.");
        localStorage.setItem("cookiesAccepted", true);
      }}
    >
      <img src="/assets/cookie.png" alt="Tiny Cookie" className="w-8 h-8" />
    </div>
  );
}