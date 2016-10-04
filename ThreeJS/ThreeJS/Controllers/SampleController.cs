using Microsoft.AspNetCore.Mvc;
using ThreeJS.DbContextFactory;

namespace ThreeJS.Controllers {
    public class SampleController : Controller {
        private ISampleRepository sampleRepository;

        public SampleController() : this(new SampleRepository(new SampleContext())) {
        }

        public SampleController(ISampleRepository repository) {
            sampleRepository = repository;
        }

        public ViewResult Get(int id) {
            var sample = sampleRepository.GetObjectById(id);
            return View(sample);
        }
    }
}