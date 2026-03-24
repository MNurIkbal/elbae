import ScriptLoader from "./ScriptLoader"

export default function Footer() {
  return (
    <>
      <footer className="d-footer">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="mb-0 text-neutral-600">
            © {new Date().getFullYear()} Aplikasi E-Arsip
          </p>
          <p className="mb-0">
            Create by
              M.Nur Ikbal
          </p>
        </div>
      </footer>
    </>

  )
}