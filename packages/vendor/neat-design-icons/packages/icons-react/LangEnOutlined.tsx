// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangEnOutlinedSVG from '../icons-svg/lib/LangEnOutlined'
import Icon, { type BaseIconProps } from '../components'

const LangEnOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangEnOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangEnOutlined.displayName = 'LangEnOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangEnOutlined)