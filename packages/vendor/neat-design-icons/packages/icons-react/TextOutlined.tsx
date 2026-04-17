// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TextOutlinedSVG from '../icons-svg/lib/TextOutlined'
import Icon, { type BaseIconProps } from '../components'

const TextOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TextOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TextOutlined.displayName = 'TextOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TextOutlined)