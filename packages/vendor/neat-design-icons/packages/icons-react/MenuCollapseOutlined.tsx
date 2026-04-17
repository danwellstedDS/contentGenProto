// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MenuCollapseOutlinedSVG from '../icons-svg/lib/MenuCollapseOutlined'
import Icon, { type BaseIconProps } from '../components'

const MenuCollapseOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MenuCollapseOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MenuCollapseOutlined.displayName = 'MenuCollapseOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MenuCollapseOutlined)