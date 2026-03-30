import { Icon } from "@iconify/react";

export default function Breakbout(
  {
    title = "Dashboard",
    sub = "",
    tag = ""
  }
) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-6 mt-4">
      <h6 className="font-semibold mb-0 dark:text-white">Dashboard</h6>
      <ul className="flex items-center gap-[6px]">
        <li className="font-medium">
          <span
            className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-600"
          >
            <Icon icon="mdi:home" className="menu-icon"></Icon>
            {title}
          </span>
        </li>
        {sub && (
          <>
            <span>-</span>
            <li className="font-medium">
              <span className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-600">
                {sub}
              </span>
            </li>
          </>
        )}
        {tag && (
          <>
            <span>-</span>
            <li className="font-medium">
              <span className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-600">
                {tag}
              </span>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}