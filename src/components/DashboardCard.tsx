
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export const DashboardCard = ({
  title,
  value,
  description,
  className,
  children,
}: DashboardCardProps) => {
  return (
    <Card className={cn("p-6 animate-fade-in", className)}>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{value}</p>
          {children}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
};
