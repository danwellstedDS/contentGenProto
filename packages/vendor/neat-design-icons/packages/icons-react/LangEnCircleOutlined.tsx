// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangEnCircleOutlinedSVG from '../icons-svg/lib/LangEnCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const LangEnCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangEnCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangEnCircleOutlined.displayName = 'LangEnCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangEnCircleOutlined)