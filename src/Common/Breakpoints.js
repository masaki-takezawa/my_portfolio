const size = {
  sp: '519px', //Smart Phone ~519px
  tab: '959px', //Tablet 520px ~ 959px
  pc: '960px', //PC 960px ~
};

export const Breakpoints = {
  sp: `(max-width: ${size.sp})`,
  tab: `(max-width: ${size.tab})`,
  pc: `(min-width: ${size.pc})`,
};
