export const tiltSection = (event, sectionId) => {
  const section = document.getElementById(sectionId);
  const sectionRect = section.getBoundingClientRect();
  const sectionCenterX = sectionRect.left + sectionRect.width / 2;
  const sectionCenterY = sectionRect.top + sectionRect.height / 2;
  const xPos = event.clientX;
  const yPos = event.clientY;
  const distanceFromCenterX = xPos - sectionCenterX;
  const distanceFromCenterY = yPos - sectionCenterY;
  const xTilt = (distanceFromCenterX / sectionRect.width) * 10;
  const yTilt = (distanceFromCenterY / sectionRect.height) * 10;
  section.style.transform = `perspective(1000px) rotateX(${yTilt}deg) rotateY(${xTilt}deg)`;
};

export const resetSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.style.transform = 'none';
};