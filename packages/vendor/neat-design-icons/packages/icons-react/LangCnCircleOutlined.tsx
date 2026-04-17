// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangCnCircleOutlinedSVG from '../icons-svg/lib/LangCnCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const LangCnCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangCnCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangCnCircleOutlined.displayName = 'LangCnCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangCnCircleOutlined)