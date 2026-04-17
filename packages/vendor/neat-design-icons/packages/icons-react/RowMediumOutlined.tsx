// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowMediumOutlinedSVG from '../icons-svg/lib/RowMediumOutlined'
import Icon, { type BaseIconProps } from '../components'

const RowMediumOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowMediumOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowMediumOutlined.displayName = 'RowMediumOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowMediumOutlined)