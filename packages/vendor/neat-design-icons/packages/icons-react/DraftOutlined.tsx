// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DraftOutlinedSVG from '../icons-svg/lib/DraftOutlined'
import Icon, { type BaseIconProps } from '../components'

const DraftOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DraftOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DraftOutlined.displayName = 'DraftOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DraftOutlined)