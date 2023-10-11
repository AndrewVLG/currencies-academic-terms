export const ChevronDown = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='0.5rem'
      height='0.5rem'
      style={{ position: 'relative', left: '-0.4rem' }}
      fill='currentColor'
      focusable={true}
      aria-invalid={false}
      viewBox='0 0 16 16'
      data-testid='chevron-down'
    >
      <path
        fillRule='evenodd'
        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
      />
    </svg>
  )
}
