// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileJsonOutlinedSVG from '../icons-svg/lib/FileJsonOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileJsonOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileJsonOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileJsonOutlined.displayName = 'FileJsonOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileJsonOutlined)