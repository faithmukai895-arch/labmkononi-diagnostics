import { useNavigate } from "@tanstack/react-router";
import { CalendarClock, MapPin, Stethoscope } from "lucide-react";
import { useState } from "react";

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
import { whatsappLink, whatsappMessages } from "@/content/site";

export const requestTypes = [
  { value: "individual_test", label: "Individual Test" },
  { value: "wellness_package", label: "Wellness Package" },
  { value: "referral", label: "Doctor / Professional Referral" },
  { value: "unsure", label: "I am not sure which test I need" },
] as const;

export const collectionOptions = [
  { value: "home", label: "Home" },
  { value: "workplace", label: "Workplace" },
  { value: "partner_outlet", label: "Partner Collection Point" },
] as const;

export const timeSlots = [
  "07:00 - 09:00",
  "09:00 - 11:00",
  "11:00 - 13:00",
  "13:00 - 15:00",
  "15:00 - 17:00",
  "17:00 - 19:00",
];

/** Step 1-4 quick booking widget. Hands off to the full order flow. */
export function BookingWidget() {
  const navigate = useNavigate();
  const [requestType, setRequestType] = useState<string>("individual_test");
  const [collection, setCollection] = useState<string>("home");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-lift sm:p-6">
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-green-soft text-accent-foreground">
          <CalendarClock className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0">
          <h2 className="truncate font-display text-lg font-bold text-primary">Book Your Test</h2>
          <p className="truncate text-xs text-muted-foreground">
            Four quick steps — no account needed to start
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <Stethoscope className="h-3.5 w-3.5" /> Step 1 · What do you need?
          </Label>
          <Select value={requestType} onValueChange={setRequestType}>
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {requestTypes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {requestType === "unsure" ? (
          <div className="rounded-xl border border-brand-green/30 bg-brand-green-soft p-3 text-sm text-accent-foreground">
            <p className="font-semibold">
              Speak to a qualified healthcare professional before selecting a test.
            </p>
            <Button asChild size="sm" variant="secondary" className="mt-3">
              <a href={whatsappLink(whatsappMessages.guidance)} target="_blank" rel="noreferrer">
                Request guidance on WhatsApp
              </a>
            </Button>
          </div>
        ) : null}

        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <MapPin className="h-3.5 w-3.5" /> Step 2 · Where should we collect your sample?
          </Label>
          <Select value={collection} onValueChange={setCollection}>
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {collectionOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Step 3 · Preferred date
            </Label>
            <Input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Step 4 · Preferred time
            </Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          size="lg"
          className="h-12 w-full"
          onClick={() =>
            navigate({
              to: "/order",
              search: {
                type: requestType,
                collection,
                date: date || undefined,
                time: time || undefined,
              },
            })
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
