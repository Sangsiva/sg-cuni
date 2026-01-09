import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ValuePropositionSection() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Competitive Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm md:text-base text-muted-foreground">Leveraging India manufacturing for cost-effective solutions.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wide Customization</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm md:text-base text-muted-foreground">Logos, colors, fabrics, and sizes tailored to your needs.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fast Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm md:text-base text-muted-foreground">2-4 weeks from approval to Singapore delivery.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
