import clsx from "clsx";
import type { ComponentProps } from "preact";

interface LogoProps extends ComponentProps<"svg"> {
  type?: "icon+text" | "icon" | "text";
  color?: string;
}

const EmsatLogo = ({ type = "text", color = "cyan", class: clazz, ...rest }: LogoProps) =>
  type === "text" ? (
    <svg
      width="138"
      height="38"
      viewBox="0 0 138 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={clsx(`text-${color} w-auto`, clazz)}
      {...rest}
    >
      <path
        d="M25.7288 2.39725V9.5178H9.35593V26.1324H18.7119V23.7589H25.7288V33.253H2.33898V9.5178H0V2.39725H25.7288ZM16.3729 21.3854H11.6949V14.2648H23.3898L16.3729 21.3854Z"
        fill="currentColor"
      />
      <path
        d="M35.0847 19.3204V33.253H28.0678V2.08869L42.1017 16.3298L56.1356 2.08869V33.253H49.1186V19.3204L42.1017 26.441L35.0847 19.3204Z"
        fill="currentColor"
      />
      <path
        d="M84.2034 14.2648H77.1864V9.5178H67.8305C67.1912 9.5178 66.6376 9.75515 66.1698 10.2299C65.7176 10.6887 65.4915 11.2426 65.4915 11.8913C65.4915 12.5401 65.7176 13.1018 66.1698 13.5765C66.6376 14.0354 67.1912 14.2648 67.8305 14.2648H70.1695C72.758 14.2648 74.9644 15.1905 76.7888 17.0418C78.6132 18.8932 79.5254 21.1322 79.5254 23.7589C79.5254 26.3856 78.6132 28.6246 76.7888 30.476C74.9644 32.3273 72.758 33.253 70.1695 33.253H58.4746V26.1324H70.1695C70.8088 26.1324 71.3546 25.903 71.8068 25.4441C72.2746 24.9694 72.5085 24.4077 72.5085 23.7589C72.5085 23.1101 72.2746 22.5563 71.8068 22.0974C71.3546 21.6227 70.8088 21.3854 70.1695 21.3854H67.8305C65.242 21.3854 63.0356 20.4597 61.2112 18.6084C59.3868 16.757 58.4746 14.518 58.4746 11.8913C58.4746 9.26463 59.3868 7.02561 61.2112 5.17427C63.0356 3.32292 65.242 2.39725 67.8305 2.39725H84.2034V14.2648Z"
        fill="currentColor"
      />
      <path
        d="M100.576 14.2411L89.9807 33.253H81.8644L100.576 0L119.288 33.253H95.8983V26.1324H107.196L100.576 14.2411Z"
        fill="currentColor"
      />
      <path
        d="M123.966 9.5178H116.949V2.39725H138V9.5178H130.983V38L123.966 30.8795V9.5178Z"
        fill="currentColor"
      />
    </svg>
  ) : type === "icon" ? (
    <img src="/icon-logo.png" alt="emsat icon logo" class={clsx("w-auto", clazz)} />
  ) : null;

export default EmsatLogo;
