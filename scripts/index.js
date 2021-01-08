const shareBtn = document.getElementById("share-profile");
let isTooltipShowing = false;

const shareProfileHandler = () => {
  if (isTooltipShowing) return;

  const tooltipElement = document.createElement("div");
  const tooltipTemplate = document.getElementById("tooltip-temp");
  const containerTitle = document.querySelector(".description-container h4");
  const containerDesc = document.querySelector(".description-container p");
  const titleBottomRight = containerTitle.getBoundingClientRect().right;
  console.log(titleBottomRight);

  const tooltip = document.importNode(tooltipTemplate.content, true);
  tooltipElement.append(tooltip);

  tooltipElement.style.position = "absolute";

  containerDesc.insertAdjacentElement("beforebegin", tooltipElement);
  isTooltipShowing = true;
};

shareBtn.addEventListener("mouseover", shareProfileHandler);
