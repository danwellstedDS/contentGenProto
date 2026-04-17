// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DeleteOutlinedSVG from '../icons-svg/lib/DeleteOutlined'
import Icon, { type BaseIconProps } from '../components'

const DeleteOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DeleteOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DeleteOutlined.displayName = 'DeleteOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DeleteOutlined)