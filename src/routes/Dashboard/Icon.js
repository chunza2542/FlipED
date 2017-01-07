import React from "react"
import c from "classnames"
import withStyles from "isomorphic-style-loader/lib/withStyles"

import s from "./Sidebar.scss"

const homeSvg = `
  M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16
  12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z
`
const userOriginal = `
  M14.506 0.063c-3.106 0.3-6.188 1.569-8.6 3.531-0.713 0.575-1.838 1.713-2.4
  2.419-1.431 1.794-2.606 4.219-3.094 6.394-0.306 1.363-0.375 2.031-0.375
  3.594s0.069 2.231 0.375 3.594c0.494 2.219 1.7 4.681 3.181 6.5 0.581 0.712
  1.713 1.831 2.438 2.419 2.1 1.675 4.662 2.831 7.419 3.337 0.825 0.15 0.931 0.156 2.875 0.137l2.019-0.025 0.869-0.231c3.494-0.938 5.975-2.294 8.106-4.438 1.262-1.262 2.225-2.619 3.031-4.262 0.781-1.594 1.225-3.025 1.506-4.844 0.15-1.006 0.15-3.369 0-4.375-0.281-1.819-0.725-3.25-1.506-4.844-0.837-1.7-1.769-3-3.113-4.325-1.319-1.306-2.525-2.163-4.206-2.987-1.575-0.775-3.038-1.231-4.781-1.5-0.788-0.119-2.925-0.169-3.744-0.094zM17.594 1.381c2.288 0.225 4.731 1.119 6.656 2.438 3.544 2.425 5.819 6.144 6.35 10.363 0.119 0.931 0.119 2.706 0 3.638-0.344 2.706-1.419 5.256-3.119 7.387-0.344 0.425-0.969 1.106-1.012 1.106-0.019 0-0.225-0.131-0.469-0.288-0.594-0.381-1.575-0.844-3.094-1.462-2.025-0.825-2.75-1.262-3.025-1.831-0.119-0.244-0.131-0.381-0.131-1.319v-1.044l0.281-0.4c0.369-0.512 0.731-1.294 0.938-2 0.087-0.313 0.206-0.6 0.269-0.637 0.475-0.344 0.769-0.844 0.956-1.619 0.163-0.681 0.137-1.294-0.069-1.731-0.075-0.162-0.163-0.306-0.188-0.325-0.025-0.012 0.019-0.287 0.1-0.6 0.3-1.2 0.363-1.713 0.363-3.025 0-1.106-0.012-1.313-0.137-1.781-0.4-1.469-1.262-2.444-2.538-2.85-0.369-0.112-0.569-0.219-0.769-0.406-0.631-0.581-1.644-0.875-2.994-0.875-2.194 0-4.019 0.713-5.031 1.969-0.425 0.525-0.838 1.388-1.031 2.131-0.131 0.512-0.169 0.819-0.194 1.688-0.031 1.119 0.044 1.963 0.294 3.106l0.119 0.544-0.188 0.344c-0.531 0.981-0.1 2.769 0.838 3.431 0.056 0.038 0.162 0.269 0.225 0.512 0.231 0.837 0.731 1.85 1.144 2.319l0.194 0.219-0.037 1.081c-0.037 1.256-0.056 1.306-0.588 1.781-0.431 0.381-1.069 0.706-2.738 1.381-1.581 0.644-2.256 0.962-2.888 1.369-0.275 0.175-0.519 0.319-0.537 0.319-0.056 0-0.65-0.637-1.025-1.106-1.7-2.131-2.775-4.681-3.119-7.387-0.119-0.931-0.119-2.706 0-3.637 0.9-7.188 6.894-12.656 14.131-12.887 0.613-0.019 1.262 0.006 2.063 0.087zM16.938 5.463c0.631 0.112 1.012 0.306 1.331 0.669 0.231 0.263 0.306 0.306 0.694 0.394 0.238 0.056 0.55 0.156 0.7 0.225 0.4 0.175 0.856 0.631 1.075 1.081 0.331 0.669 0.413 1.138 0.406 2.263-0.006 1.1-0.156 2.044-0.519 3.281l-0.188 0.625 0.25 0.225c0.3 0.269 0.375 0.519 0.306 0.969-0.113 0.7-0.375 1.119-0.719 1.119-0.219 0-0.319 0.15-0.369 0.544-0.113 0.925-0.669 2.163-1.181 2.656l-0.306 0.294 0.038 1.531c0.044 1.706 0.044 1.712 0.55 2.394 0.506 0.675 1.531 1.281 3.494 2.050 1.025 0.406 2.581 1.137 2.806 1.325l0.15 0.119-0.262 0.206c-0.944 0.75-3.6 2.156-4.944 2.619-2.119 0.731-4.95 0.856-7.406 0.325-2.025-0.438-4.425-1.581-5.894-2.806-0.319-0.269-0.381-0.344-0.319-0.419 0.119-0.144 1.644-0.869 2.938-1.394 2-0.813 2.706-1.206 3.3-1.856 0.181-0.194 0.4-0.5 0.494-0.675 0.162-0.319 0.162-0.331 0.188-1.887l0.025-1.569-0.338-0.337c-0.181-0.188-0.425-0.506-0.531-0.719-0.262-0.488-0.563-1.394-0.613-1.856-0.050-0.4-0.15-0.544-0.381-0.544-0.419 0-0.756-0.762-0.719-1.613 0.006-0.081 0.131-0.275 0.275-0.438l0.275-0.294-0.081-0.313c-0.2-0.756-0.4-1.894-0.469-2.688-0.244-2.819 0.731-4.638 2.825-5.275 0.95-0.294 2.238-0.388 3.119-0.231z
`

const userSvg = `
  M25.143 25.089q0 2.143-1.304 3.384t-3.464 1.241h-15.607q-2.161
  0-3.464-1.241t-1.304-3.384q0-0.946 0.063-1.848t0.25-1.946 0.473-1.938
  0.768-1.741 1.107-1.446 1.527-0.955 1.991-0.357q0.161 0 0.75 0.384t1.33
  0.857 1.929 0.857 2.384 0.384 2.384-0.384 1.929-0.857 1.33-0.857
  0.75-0.384q1.089 0 1.991 0.357t1.527 0.955 1.107 1.446 0.768 1.741
  0.473 1.938 0.25 1.946 0.063 1.848zM19.429 9.143q0 2.839-2.009
  4.848t-4.848 2.009-4.848-2.009-2.009-4.848 2.009-4.848 4.848-2.009
  4.848 2.009 2.009 4.848z
`

const backInTimeSvg = `
  M11 1.799c-4.445 0-8.061 3.562-8.169 7.996v0.205h-2.372l3.594 3.894
  3.494-3.894h-2.672v-0.205c0.107-3.303 2.808-5.945 6.125-5.945 3.386 0
  6.131 2.754 6.131 6.15s-2.745 6.15-6.131 6.15c-1.357 0-2.611-0.445-3.627-1.193l-1.406
  1.504c1.388 1.088 3.135 1.738 5.033 1.738 4.515 0 8.174-3.67
  8.174-8.199s-3.659-8.201-8.174-8.201zM10 5v5c0 0.13 0.027 0.26 0.077
  0.382s0.124 0.233 0.216 0.325l3.2 3.2c0.283-0.183 0.55-0.389
  0.787-0.628l-2.28-2.279v-6h-2z
`

const errorSvg = `
  M18.984 6.422l-5.578 5.578 5.578 5.578-1.406
  1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578
  1.406-1.406 5.578 5.578 5.578-5.578z
`

const wifiOff = `
  M3.281 2.484l0.984 1.031 16.734 16.734-1.266 1.266-7.5-7.547h-0.047l-0.188
  0.047c-1.078 0-2.016-0.938-2.016-2.016l0.047-0.188-1.594-1.594c-0.281
  0.563-0.422 1.125-0.422 1.781 0 1.5 0.797 2.766 1.969 3.469l-0.984
  1.734c-1.781-1.031-3-3-3-5.203 0-1.219 0.328-2.297 0.938-3.234l-1.406-1.453c-0.938
  1.313-1.547 2.906-1.547 4.688 0 2.953 1.594 5.531 3.984 6.938l-0.984
  1.734c-3-1.734-4.969-4.969-4.969-8.672 0-2.297 0.75-4.453
  2.063-6.141l-2.063-2.109zM12 3.984c-1.359 0-2.625 0.328-3.75
  0.938l-1.453-1.453c1.5-0.938 3.281-1.453 5.203-1.453 5.531 0 9.984 4.453
  9.984 9.984 0 1.922-0.516 3.703-1.453 5.203l-1.5-1.453c0.609-1.125 0.984-2.391
  0.984-3.75 0-4.406-3.609-8.016-8.016-8.016zM17.578 14.25l-1.641-1.641c0.047-0.188
  0.047-0.422 0.047-0.609 0-2.203-1.781-3.984-3.984-3.984-0.188 0-0.422 0-0.609
  0.047l-1.641-1.641c0.703-0.281 1.453-0.422 2.25-0.422 3.328 0 6 2.672 6 6 0
  0.797-0.141 1.547-0.422 2.25z
`

const wifiOn = `
  M12 3c5.531 0 9.984 4.453 9.984 9.984 0 3.703-1.969 6.938-4.969
  8.672l-1.031-1.734c2.391-1.406 4.031-3.984 4.031-6.938
  0-4.406-3.609-7.969-8.016-7.969s-8.016 3.563-8.016 7.969c0 2.953 1.594 5.531
  3.984 6.938l-0.984 1.734c-3-1.734-4.969-4.969-4.969-8.672 0-5.531 4.453-9.984
  9.984-9.984zM18 12.984c0 2.203-1.219 4.172-3 5.203l-0.984-1.734c1.172-0.703
  1.969-1.969 1.969-3.469 0-2.203-1.781-3.984-3.984-3.984s-3.984 1.781-3.984
  3.984c0 1.5 0.797 2.766 1.969 3.469l-0.984 1.734c-1.781-1.031-3-3-3-5.203
  0-3.328 2.672-6 6-6s6 2.672 6 6zM12 11.016c1.078 0 2.016 0.891 2.016 1.969s-0.938
  2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-1.969 2.016-1.969z
`

const searchSvg = `
  M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016
  4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125
  0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516
  6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z
`

const classSvg = `
  M6 3.984v8.016l2.484-1.5 2.531 1.5v-8.016h-5.016zM18 2.016c1.078 0 2.016 0.891
  2.016 1.969v16.031c0 1.078-0.938 1.969-2.016 1.969h-12c-1.078
  0-2.016-0.891-2.016-1.969v-16.031c0-1.078 0.938-1.969 2.016-1.969h12z
`

const noteAddSvg = `
  M12.984 9h5.531l-5.531-5.484v5.484zM15.984
  15.984v-1.969h-3v-3h-1.969v3h-3v1.969h3v3h1.969v-3h3zM14.016 2.016l6 6v12c0
  1.078-0.938 1.969-2.016 1.969h-12c-1.078
  0-2.016-0.891-2.016-1.969l0.047-16.031c0-1.078 0.891-1.969 1.969-1.969h8.016z
`

const m = {
  viewBox: "0 0 24 24"
}

const Icons = {
  Dashboard: {
    viewBox: "0 0 32 32",
    path: homeSvg
  },
  Classes: {
    ...m,
    path: classSvg
  },
  Students: {
    viewBox: "0 0 32 32",
    path: userOriginal
  },
  Chat: {
    viewBox: "0 0 32 32",
    path: userSvg
  },
  check: {
    ...m,
    path: "M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"
  },
  backInTime: {
    viewBox: "0 0 20 20",
    path: backInTimeSvg
  },
  error: {
    ...m,
    path: errorSvg
  },
  wifiOff: {
    ...m,
    path: wifiOff
  },
  wifiOn: {
    ...m,
    path: wifiOn
  },
  search: {
    ...m,
    path: searchSvg
  },
  noteAdd: {
    ...m,
    path: noteAddSvg
  },
  dashboard: {
    ...m,
    path: `
      M12.984 3h8.016v6h-8.016v-6zM12.984 21v-9.984h8.016v9.984h-8.016zM3
      21v-6h8.016v6h-8.016zM3 12.984v-9.984h8.016v9.984h-8.016z
    `
  },
  dropdown: {
    ...m,
    path: `M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z`
  },
  moreVert: {
    ...m,
    path: `
      M12 15.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016
      2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 9.984c1.078 0
      2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016
      0.938-2.016 2.016-2.016zM12 8.016c-1.078 0-2.016-0.938-2.016-2.016s0.938-2.016
      2.016-2.016 2.016 0.938 2.016 2.016-0.938 2.016-2.016 2.016z
    `
  }
}

export const SideIcon = withStyles(s)(props => (
  <div onClick={props.onClick} className={c(s.sidebarItem, props.active && s.active)}>
    <svg viewBox={Icons[props.is].viewBox}>
      <path d={Icons[props.is].path} />
    </svg>
    <div>{props.is}</div>
  </div>
))

const Icon = props => (
  <svg viewBox={Icons[props.i].viewBox} style={{fill: props.fill}}>
    <path d={Icons[props.i].path} />
  </svg>
)

export default Icon
