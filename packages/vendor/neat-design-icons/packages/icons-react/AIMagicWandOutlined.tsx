// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AIMagicWandOutlinedSVG from '../icons-svg/lib/AIMagicWandOutlined'
import Icon, { type BaseIconProps } from '../components'

const AIMagicWandOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AIMagicWandOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AIMagicWandOutlined.displayName = 'AIMagicWandOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AIMagicWandOutlined)