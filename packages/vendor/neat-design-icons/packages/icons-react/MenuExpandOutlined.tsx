// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MenuExpandOutlinedSVG from '../icons-svg/lib/MenuExpandOutlined'
import Icon, { type BaseIconProps } from '../components'

const MenuExpandOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MenuExpandOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MenuExpandOutlined.displayName = 'MenuExpandOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MenuExpandOutlined)