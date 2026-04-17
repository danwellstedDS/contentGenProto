// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MagicWondOutlinedSVG from '../icons-svg/lib/MagicWondOutlined'
import Icon, { type BaseIconProps } from '../components'

const MagicWondOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MagicWondOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MagicWondOutlined.displayName = 'MagicWondOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MagicWondOutlined)