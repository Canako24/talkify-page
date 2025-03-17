
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: { monthly: "$9", annually: "$90" },
    description: "Perfect for individual users and small projects.",
    features: [
      "Up to 5 hours of transcription monthly",
      "Standard accuracy",
      "Basic formatting",
      "Export to TXT and DOC",
      "Email support",
    ],
    most_popular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: { monthly: "$19", annually: "$190" },
    description: "Ideal for professionals and content creators.",
    features: [
      "Up to 20 hours of transcription monthly",
      "Enhanced accuracy with domain-specific training",
      "Advanced formatting with custom templates",
      "Export to all formats including PDF and SRT",
      "Priority email support",
      "Multi-speaker recognition",
    ],
    most_popular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: { monthly: "$49", annually: "$490" },
    description: "For teams and businesses with advanced needs.",
    features: [
      "Unlimited transcription hours",
      "Highest accuracy with custom vocabulary",
      "Premium formatting with branding options",
      "All export formats plus API access",
      "24/7 priority support",
      "Admin dashboard and team management",
      "Custom integrations",
      "Enhanced security and compliance",
    ],
    most_popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that works for you. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`
                  flex flex-col rounded-3xl p-8 bg-white shadow-sm ring-1 ring-gray-200
                  ${tier.most_popular ? 'relative ring-2 ring-indigo-600' : ''}
                `}
              >
                {tier.most_popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price.monthly}
                    </span>
                    <span className="text-base text-gray-500">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    or {tier.price.annually} billed annually
                  </p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 flex-shrink-0 text-indigo-500" />
                        <span className="ml-2 text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button
                    variant={tier.most_popular ? "default" : "outline"}
                    className="w-full"
                  >
                    {tier.most_popular ? "Start free trial" : "Learn more"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
