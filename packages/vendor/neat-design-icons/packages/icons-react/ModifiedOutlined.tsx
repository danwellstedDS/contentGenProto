// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ModifiedOutlinedSVG from '../icons-svg/lib/ModifiedOutlined'
import Icon, { type BaseIconProps } from '../components'

const ModifiedOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ModifiedOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ModifiedOutlined.displayName = 'ModifiedOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ModifiedOutlined)