// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DataConfigOutlinedSVG from '../icons-svg/lib/DataConfigOutlined'
import Icon, { type BaseIconProps } from '../components'

const DataConfigOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DataConfigOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DataConfigOutlined.displayName = 'DataConfigOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DataConfigOutlined)