// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileAddOutlinedSVG from '../icons-svg/lib/FileAddOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileAddOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileAddOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileAddOutlined.displayName = 'FileAddOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileAddOutlined)