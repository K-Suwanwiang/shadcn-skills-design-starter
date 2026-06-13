type PageHeaderProps = {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {title}
      </h1>
      {description ? (
        <p className="text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
