export function useWindEffect(intensity = 'gentle') {
  let suffix = '';
  if (intensity === 'moderate') {
    suffix = '-moderate';
  } else if (intensity === 'strong') {
    suffix = '-strong';
  }

  return {
    hairWind: `cine-wind-hair${suffix}`,
    clothWind: `cine-wind-cloth${suffix}`,
    leafWind: `cine-wind-leaf${suffix}`
  };
}
