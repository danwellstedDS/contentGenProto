// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MinusOutlinedSVG from '../icons-svg/lib/MinusOutlined'
import Icon, { type BaseIconProps } from '../components'

const MinusOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MinusOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MinusOutlined.displayName = 'MinusOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MinusOutlined)