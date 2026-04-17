// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileCopyOutlinedSVG from '../icons-svg/lib/FileCopyOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileCopyOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileCopyOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileCopyOutlined.displayName = 'FileCopyOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileCopyOutlined)