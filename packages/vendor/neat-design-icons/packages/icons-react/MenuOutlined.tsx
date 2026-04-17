// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MenuOutlinedSVG from '../icons-svg/lib/MenuOutlined'
import Icon, { type BaseIconProps } from '../components'

const MenuOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MenuOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MenuOutlined.displayName = 'MenuOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MenuOutlined)