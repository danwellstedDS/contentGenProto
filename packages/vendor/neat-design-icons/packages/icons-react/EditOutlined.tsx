// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EditOutlinedSVG from '../icons-svg/lib/EditOutlined'
import Icon, { type BaseIconProps } from '../components'

const EditOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={EditOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EditOutlined.displayName = 'EditOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EditOutlined)