document.getElementById('distance-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const lat1 = parseFloat(document.getElementById('lat1').value);
  const lon1 = parseFloat(document.getElementById('lon1').value);
  const lat2 = parseFloat(document.getElementById('lat2').value);
  const lon2 = parseFloat(document.getElementById('lon2').value);

  const R = 6371; // Dünya yarıçapı (km)
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  document.getElementById('result').textContent = 
    `İki konum arası mesafe: ${distance.toFixed(2)} km`;
});

function degToRad(deg) {
  return deg * (Math.PI / 180);
}
