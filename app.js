const mockPhotos = [
  {
    title: "봄날 피크닉",
    description: "따뜻한 바람과 함께한 오후",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "첫 생일 파티",
    description: "촛불을 불던 순간",
    url: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "바닷가 산책",
    description: "파도 소리가 가득한 하루",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "가을 캠핑",
    description: "모닥불 옆 웃음",
    url: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "겨울 여행",
    description: "눈 내리는 거리",
    url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "가족 사진",
    description: "모두가 함께한 날",
    url: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?auto=format&fit=crop&w=800&q=80",
  },
];

function renderGallery(photos) {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  gallery.innerHTML = photos
    .map(
      (photo) => `
        <article class="photo-card">
          <img src="${photo.url}" alt="${photo.title}" loading="lazy" />
          <div class="photo-info">
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery(mockPhotos);
});
