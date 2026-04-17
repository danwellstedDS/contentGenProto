// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangCnOutlinedSVG from '../icons-svg/lib/LangCnOutlined'
import Icon, { type BaseIconProps } from '../components'

const LangCnOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangCnOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangCnOutlined.displayName = 'LangCnOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangCnOutlined)