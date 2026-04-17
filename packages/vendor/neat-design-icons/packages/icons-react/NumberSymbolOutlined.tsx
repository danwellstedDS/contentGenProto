// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NumberSymbolOutlinedSVG from '../icons-svg/lib/NumberSymbolOutlined'
import Icon, { type BaseIconProps } from '../components'

const NumberSymbolOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={NumberSymbolOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NumberSymbolOutlined.displayName = 'NumberSymbolOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NumberSymbolOutlined)