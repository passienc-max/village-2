import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { HeartHandshake, Store, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ROLES = [
  { key: "parent", label: "I'm a parent", icon: HeartHandshake, fieldLabel: "What would help most right now?", placeholder: "Laundry help, rides to soccer, resume help…", field: "needs", tabid: "waitlist-role-parent-tab" },
  { key: "business", label: "I'm a business or sponsor", icon: Store, fieldLabel: "How could you support the village?", placeholder: "Sponsor laundry loads, offer services, hire parents…", field: "offering", tabid: "waitlist-role-business-tab" },
];

export default function Waitlist() {
  const [role, setRole] = useState("parent");
  const [form, setForm] = useState({ name: "", email: "", city: "", needs: "", offering: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/waitlist/count`)
      .then((r) => setCount(r.data.total))
      .catch(() => setCount(null));
  }, []);

  const active = ROLES.find((r) => r.key === role);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !emailOk) {
      toast.error("Please add your name and a valid email.");
      return;
    }
    setLoading(true);
    try {
      const r = await axios.post(`${API}/waitlist`, { ...form, role });
      setDone(r.data);
      setCount(r.data.total);
      toast.success(r.data.already ? "You're already on the list." : "Welcome to the village.");
    } catch (err) {
      toast.error("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="py-24 lg:py-32 bg-cream" data-testid="waitlist-section">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Join the village"
          title="Be one of the first."
          sub="We're validating the highest-value needs and building the minimum viable platform. Add your name and help shape what gets built first."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-ink/10 bg-white p-7 sm:p-10 shadow-warm" data-testid="waitlist-form-card">
            {done ? (
              <div className="text-center py-8" data-testid="waitlist-success-message">
                <CheckCircle2 size={44} className="mx-auto text-sage" />
                <h3 className="mt-5 font-display text-3xl text-ink">
                  {done.already ? "You're already on the list" : "Welcome to the village"}
                </h3>
                <p className="mt-3 text-ink/70">
                  {done.already
                    ? "We saved your spot the first time — no need to sign up twice."
                    : `You're family #${done.total}. We'll be in touch as the village takes shape.`}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-full bg-cream" data-testid="waitlist-role-tabs">
                  {ROLES.map((r) => (
                    <button
                      key={r.key}
                      type="button"
                      onClick={() => setRole(r.key)}
                      data-testid={r.tabid}
                      className={`flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-200 ${
                        role === r.key ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      <r.icon size={16} />
                      <span className="hidden sm:inline">{r.label}</span>
                      <span className="sm:hidden">{r.key === "parent" ? "Parent" : "Business"}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      data-testid="waitlist-name-input"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terra/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      data-testid="waitlist-email-input"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terra/40"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                    City <span className="normal-case tracking-normal text-ink/35">(helps us plan local villages)</span>
                  </label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    data-testid="waitlist-city-input"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terra/40"
                    placeholder="Where are you?"
                  />
                </div>

                <div className="mt-4">
                  <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">{active.fieldLabel}</label>
                  <textarea
                    value={form[active.field]}
                    onChange={(e) => setForm({ ...form, [active.field]: e.target.value })}
                    data-testid={role === "parent" ? "waitlist-needs-input" : "waitlist-offering-input"}
                    rows={3}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terra/40 resize-none"
                    placeholder={active.placeholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="waitlist-submit-button"
                  className="mt-7 w-full rounded-full bg-terra hover:bg-terra-dark text-paper font-medium py-4 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                  {loading ? "Joining…" : "Join the Village"}
                </button>

                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40" data-testid="waitlist-count-note">
                  {count && count > 0
                    ? `${count} ${count === 1 ? "person has" : "people have"} already joined`
                    : "Be among the very first in the village"}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
