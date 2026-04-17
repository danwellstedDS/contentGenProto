// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileSearchOutlinedSVG from '../icons-svg/lib/FileSearchOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileSearchOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileSearchOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileSearchOutlined.displayName = 'FileSearchOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileSearchOutlined)