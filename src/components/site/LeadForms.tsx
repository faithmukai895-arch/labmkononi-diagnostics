import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const str = (max: number) => z.string().trim().min(1, "Required").max(max);
const emailSchema = z.string().trim().email("Enter a valid email address").max(255);
const phoneSchema = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number")
  .max(20)
  .regex(/^[0-9+\s()-]+$/, "Enter a valid phone number");

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

function useSubmit<T>(
  table: "contact_messages" | "partner_applications" | "corporate_quotes",
  successMessage: string,
) {
  const [loading, setLoading] = useState(false);

  async function submit(payload: T, reset: () => void) {
    setLoading(true);
    const { error } = await supabase.from(table).insert(payload as never);
    setLoading(false);
    if (error) {
      toast.error("We could not send your message. Please try again or use WhatsApp.");
      return;
    }
    toast.success(successMessage);
    reset();
  }

  return { loading, submit };
}

export function ContactForm() {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { loading, submit } = useSubmit<typeof values>(
    "contact_messages",
    "Thank you — your message has been sent to the LabMkononi team.",
  );

  const schema = z.object({
    full_name: str(100),
    email: emailSchema,
    phone: z.union([phoneSchema, z.literal("")]),
    subject: z.string().trim().max(150),
    message: str(1500),
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const parsed = schema.safeParse(values);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        void submit(parsed.data as typeof values, () =>
          setValues({ full_name: "", email: "", phone: "", subject: "", message: "" }),
        );
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <Input
            value={values.full_name}
            onChange={(e) => setValues({ ...values, full_name: e.target.value })}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone (optional)">
          <Input
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            placeholder="07XX XXX XXX"
          />
        </Field>
        <Field label="Subject">
          <Input
            value={values.subject}
            onChange={(e) => setValues({ ...values, subject: e.target.value })}
            placeholder="How can we help?"
          />
        </Field>
      </div>
      <Field label="Message">
        <Textarea
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Please avoid sharing sensitive medical details in this form."
        />
      </Field>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export function ProfessionalPartnerForm() {
  const [values, setValues] = useState({
    application_type: "health_professional",
    full_name: "",
    profession: "",
    license_number: "",
    organization: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const { loading, submit } = useSubmit<typeof values>(
    "partner_applications",
    "Thank you — the LabMkononi team will review your registration and get in touch.",
  );

  const schema = z.object({
    application_type: z.literal("health_professional"),
    full_name: str(100),
    profession: str(100),
    license_number: z.string().trim().max(60),
    organization: z.string().trim().max(150),
    phone: phoneSchema,
    email: emailSchema,
    location: z.string().trim().max(150),
    message: z.string().trim().max(1500),
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const parsed = schema.safeParse(values);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        void submit(parsed.data as typeof values, () =>
          setValues({
            application_type: "health_professional",
            full_name: "",
            profession: "",
            license_number: "",
            organization: "",
            phone: "",
            email: "",
            location: "",
            message: "",
          }),
        );
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <Input
            value={values.full_name}
            onChange={(e) => setValues({ ...values, full_name: e.target.value })}
          />
        </Field>
        <Field label="Profession">
          <Select
            value={values.profession}
            onValueChange={(v) => setValues({ ...values, profession: v })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select profession" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Nurse",
                "Clinical Officer",
                "Doctor",
                "Pharmacist",
                "Laboratory Professional",
                "Other Healthcare Provider",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Registration / licence number" hint="Where applicable">
          <Input
            value={values.license_number}
            onChange={(e) => setValues({ ...values, license_number: e.target.value })}
          />
        </Field>
        <Field label="Organization">
          <Input
            value={values.organization}
            onChange={(e) => setValues({ ...values, organization: e.target.value })}
          />
        </Field>
        <Field label="Phone">
          <Input
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Field>
        <Field label="Location">
          <Input
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
          />
        </Field>
      </div>
      <Field label="Referral information / message">
        <Textarea
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Tell us about the laboratory services your patients need."
        />
      </Field>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Submitting…" : "Submit registration"}
      </Button>
    </form>
  );
}

export function BusinessPartnerForm() {
  const [values, setValues] = useState({
    application_type: "collection_partner",
    full_name: "",
    organization: "",
    business_type: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const { loading, submit } = useSubmit<typeof values>(
    "partner_applications",
    "Thank you — your partner application has been received.",
  );

  const schema = z.object({
    application_type: z.literal("collection_partner"),
    full_name: str(100),
    organization: str(150),
    business_type: str(80),
    phone: phoneSchema,
    email: emailSchema,
    location: str(150),
    message: z.string().trim().max(1500),
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const parsed = schema.safeParse(values);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        void submit(parsed.data as typeof values, () =>
          setValues({
            application_type: "collection_partner",
            full_name: "",
            organization: "",
            business_type: "",
            phone: "",
            email: "",
            location: "",
            message: "",
          }),
        );
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name">
          <Input
            value={values.organization}
            onChange={(e) => setValues({ ...values, organization: e.target.value })}
          />
        </Field>
        <Field label="Business type">
          <Select
            value={values.business_type}
            onValueChange={(v) => setValues({ ...values, business_type: v })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Pharmacy",
                "Chemist",
                "Collection Centre",
                "Clinic",
                "Healthcare Professional",
                "Other",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Contact person">
          <Input
            value={values.full_name}
            onChange={(e) => setValues({ ...values, full_name: e.target.value })}
          />
        </Field>
        <Field label="Location">
          <Input
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
          />
        </Field>
        <Field label="Phone">
          <Input
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Field>
      </div>
      <Field label="Message">
        <Textarea
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
      </Field>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Submitting…" : "Submit application"}
      </Button>
    </form>
  );
}

export function CorporateQuoteForm() {
  const [values, setValues] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    employees: "",
    location: "",
    services_needed: "",
    message: "",
  });
  const { loading, submit } = useSubmit<typeof values>(
    "corporate_quotes",
    "Thank you — we will prepare a quote and contact you.",
  );

  const schema = z.object({
    company_name: str(150),
    contact_person: str(100),
    phone: phoneSchema,
    email: emailSchema,
    employees: z.string().trim().max(40),
    location: z.string().trim().max(150),
    services_needed: z.string().trim().max(200),
    message: z.string().trim().max(1500),
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const parsed = schema.safeParse(values);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        void submit(parsed.data as typeof values, () =>
          setValues({
            company_name: "",
            contact_person: "",
            phone: "",
            email: "",
            employees: "",
            location: "",
            services_needed: "",
            message: "",
          }),
        );
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company / organization">
          <Input
            value={values.company_name}
            onChange={(e) => setValues({ ...values, company_name: e.target.value })}
          />
        </Field>
        <Field label="Contact person">
          <Input
            value={values.contact_person}
            onChange={(e) => setValues({ ...values, contact_person: e.target.value })}
          />
        </Field>
        <Field label="Phone">
          <Input
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Field>
        <Field label="Number of employees">
          <Input
            value={values.employees}
            onChange={(e) => setValues({ ...values, employees: e.target.value })}
            placeholder="e.g. 25"
          />
        </Field>
        <Field label="Location">
          <Input
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
          />
        </Field>
      </div>
      <Field label="Services needed">
        <Input
          value={values.services_needed}
          onChange={(e) => setValues({ ...values, services_needed: e.target.value })}
          placeholder="Workplace screening, employee wellness, on-site collection…"
        />
      </Field>
      <Field label="Additional information">
        <Textarea
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
      </Field>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending…" : "Request corporate quote"}
      </Button>
    </form>
  );
}
