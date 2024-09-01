interface Styles {
  formClass: string;
  divFlexClass: string;
  iconClass: string;
  inputClass: string;
  bottomDivClass: string;
  inputWrapperClass: string;
  hiddenInputClass: string;
  labelClass: string;
  buttonClass: string;
}

export const CPstyles: Styles = {
  formClass: `shadow-lg bg-bg1 dark:bg-bg1Dark rounded-xl px-4 py-2 max-[374px]:p-1 flex flex-col gap-5 max-[374px]:gap-1`,
  divFlexClass: `flex gap-2 max-[374px]:flex-col max-[374px]:items-center`,
  iconClass: `text-4xl bg-bg2 dark:bg-bg2Dark dark:text-[#B8BBBF] rounded-full p-1`,
  inputClass: `w-[37.5rem] max-[700px]:w-full bg-bg2 dark:bg-bg2Dark hover:bg-bg2Hover dark:hover:bg-bg2DarkHover text-[#65676B90] dark:text-[#B8BBBF] text-[1.25rem] max-[460px]:text-base px-5 py-2 max-[272px]:p-1 rounded-full focus:outline-none focus:bg-bg2Hover dark:focus:bg-bg2DarkHover`,
  bottomDivClass: `flex items-center justify-end max-[374px]:justify-center gap-3`,
  inputWrapperClass: `cursor-pointer text-main1`,
  hiddenInputClass: `hidden`,
  labelClass: `text-[1.25rem] max-[460px]:text-base flex items-center justify-center cursor-pointer hover:bg-mainHover dark:hover:bg-mainHoverDark py-[5px] px-6 max-[460px]:px-2 rounded-3xl`,
  buttonClass: `text-bg1 font-semibold bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 py-2 px-9 max-[460px]:px-4 max-[460px]:py-1 rounded-3xl dark:text-bg1Dark`,
};
