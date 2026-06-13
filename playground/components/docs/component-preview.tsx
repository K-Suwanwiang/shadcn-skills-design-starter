import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type ComponentPreviewProps = {
  preview: React.ReactNode
  code: string
}

export function ComponentPreview({ preview, code }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="flex-col gap-4">
      <TabsList variant="line" className="w-full justify-start gap-4">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="flex min-h-[420px] items-start justify-center rounded-lg border border-border bg-background p-8"
      >
        {preview}
      </TabsContent>
      <TabsContent value="code">
        <pre className="max-h-[520px] overflow-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-sm leading-6 text-foreground">
          <code>{code}</code>
        </pre>
      </TabsContent>
    </Tabs>
  )
}
