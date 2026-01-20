// app/routes/upload/upload-page.tsx
import * as React from "react";
import { Upload, X } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";

export default function UploadPage() {
  const [file, setFile] = React.useState<File | null>(null);

  function onPickFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
  }

  function clearFile() {
    setFile(null);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    console.log("Uploading:", file.name, file.size);
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">Carga CSV</h1>
      </div>
      <div className="flex items-center justify-center py-6">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border">
              <Upload className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="file" className="sr-only">
              Archivo
            </Label>
            <input
              id="file"
              type="file"
              accept=".csv,.xlsx"
              onChange={onPickFile}
              className="sr-only"
            />
            <div className="flex items-center gap-2">
              <label
                htmlFor="file"
                className="cursor-pointer rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                Seleccionar archivo
              </label>
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground">
                <span className="block min-w-0 flex-1 truncate">
                  {file ? file.name : "Sin archivos seleccionados"}
                </span>
                {file ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={clearFile}
                    aria-label="Quitar archivo"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={!file}>
            Subir archivo
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Al subir el archivo se iniciará el procesamiento.
          </p>
        </form>
      </div>
    </div>
  );
}
