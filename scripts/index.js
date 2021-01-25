const shareBtn = document.getElementById("share-profile");
let isTooltipShowing = false;

const closeCurrentTooltip = () => {
  const tooltip = document.querySelector(".tooltip-class");
  tooltip.remove();
  isTooltipShowing = false;
};

const shareProfileHandler = () => {
  if (isTooltipShowing) return;

  const tooltipElement = document.createElement("div");
  const tooltipTemplate = document.getElementById("tooltip-temp");
  const containerTitle = document.querySelector(".description-container h4");
  const containerDesc = document.querySelector(".description-container p");
  const titleBottomRight = containerTitle.getBoundingClientRect().right;

  const tooltip = document.importNode(tooltipTemplate.content, true);
  tooltipElement.append(tooltip);

  tooltipElement.style.position = "absolute";
  tooltipElement.style.left = `${titleBottomRight - 100}px`;
  tooltipElement.className = "tooltip-class";

  containerDesc.insertAdjacentElement("beforebegin", tooltipElement);
  isTooltipShowing = true;
};

shareBtn.addEventListener("mouseover", shareProfileHandler);
shareBtn.addEventListener("mouseleave", closeCurrentTooltip);
