function CTAButton(props) {
  // Extract props with defaults
  var variant = props.variant || "primary";
  var children = props.children;
  var className = props.className || "";
  var fullWidth = props.fullWidth || false;

  // Remove extracted props to avoid passing them twice
  var otherProps = {};
  for (var key in props) {
    if (
      key !== "variant" &&
      key !== "children" &&
      key !== "className" &&
      key !== "fullWidth"
    ) {
      otherProps[key] = props[key];
    }
  }

  // Determine button classes based on variant
  var buttonClasses =
    "inline-flex items-center justify-center text-base font-medium h-[50px] rounded-[4px] px-6 transition-colors";

  if (variant === "primary") {
    buttonClasses += " bg-[#0060C7] text-white hover:bg-[#0050A8]";
  } else {
    buttonClasses +=
      " bg-white text-[#0060C7] border border-[#0060C7] hover:bg-[#F5F9FF]";
  }

  if (fullWidth) {
    buttonClasses += " w-full";
  } else {
    buttonClasses += " w-[221px]";
  }

  // Add any custom classes
  if (className) {
    buttonClasses += " " + className;
  }

  return (
    <button
      className={`cursor-pointer ${buttonClasses} font-montserrat`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export { CTAButton };
