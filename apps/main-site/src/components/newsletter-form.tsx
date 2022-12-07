import type { FunctionComponent } from "preact";

const NewsletterForm: FunctionComponent = () => {
  return (
    <form class="flex flex-col w-full space-y-5 mt-5">
      <input
        class="p-5 h-16 w-full rounded-lg bg-[rgba(0,0,0,0)] border border-black-300 placeholder:text-sm focus-ring"
        placeholder="First Name"
        name="firstName"
        required
      />
      <input
        class="p-5 h-16 w-full rounded-lg bg-[rgba(0,0,0,0)] border border-black-300 placeholder:text-sm focus-ring"
        placeholder="Last Name"
        name="lastName"
        required
      />
      <button class="focus-ring bg-white border border-black-300 rounded-lg flex items-center h-16 px-12 w-max">Sign me up</button>
    </form>
  );
};

export default NewsletterForm;
